import cv2
import numpy as np

# Initialize camera
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)  # Flip the camera (mirror effect)

    # Convert to HSV and create a mask for skin color detection
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    lower_skin = np.array([0, 20, 70], dtype=np.uint8)
    upper_skin = np.array([20, 255, 255], dtype=np.uint8)
    mask = cv2.inRange(hsv, lower_skin, upper_skin)

    # Apply Gaussian Blur to remove noise
    mask = cv2.GaussianBlur(mask, (5, 5), 0)

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    if contours:
        max_contour = max(contours, key=cv2.contourArea)

        # Get convex hull and defects
        hull = cv2.convexHull(max_contour, returnPoints=False)
        defects = cv2.convexityDefects(max_contour, hull)

        finger_count = 0

        if defects is not None:
            for i in range(defects.shape[0]):
                s, e, f, d = defects[i, 0]
                start = tuple(max_contour[s][0])
                end = tuple(max_contour[e][0])
                far = tuple(max_contour[f][0])

                # Measure the angle to count fingers
                a = np.linalg.norm(np.array(end) - np.array(far))
                b = np.linalg.norm(np.array(start) - np.array(far))
                c = np.linalg.norm(np.array(start) - np.array(end))
                angle = np.arccos((b**2 + c**2 - a**2) / (2 * b * c)) * (180 / np.pi)

                # If the angle is less than 90 degrees, count as a finger
                if angle < 90:
                    finger_count += 1
                    cv2.circle(frame, far, 5, (0, 255, 0), -1)

            finger_count += 1  # Add thumb

        # Display the finger count
        cv2.putText(frame, f"Fingers: {finger_count}", (50, 100),
                    cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0, 255, 0), 3)

        # Draw contours
        cv2.drawContours(frame, [max_contour], -1, (255, 0, 0), 2)

    cv2.imshow("Finger Counter (No MediaPipe)", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
