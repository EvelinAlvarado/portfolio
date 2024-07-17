import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export const AnimatedCursorCustom = () => {
  // State to determine if the current device is a touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Function to check if the device supports touch events
    const checkIfTouchDevice = () => {
      setIsTouchDevice(
        // Checks if 'ontouchstart' event is present in the window object or
        // if the device has one or more touch points (touchscreen capability)
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    // Invoke the check function once when the component mounts
    checkIfTouchDevice();
  }, []);

  if (isTouchDevice) {
    // If the device is a touch device, do not render the animated cursor
    return null;
  }
  return (
    <AnimatedCursor
      color="236, 231, 225"
      innerSize={1}
      outerSize={28}
      innerScale={1}
      outerScale={2}
      outerAlpha={0.8}
      showSystemCursor={true}
      trailingSpeed={5}
      hasBlendMode={true}
      outerStyle={{
        backgroundColor: "#ECE7E1",
        mixBlendMode: "exclusion",
      }}
      innerStyle={{
        backgroundColor: "#1A1818",
        mixBlendMode: "exclusion",
      }}
    />
  );
};
