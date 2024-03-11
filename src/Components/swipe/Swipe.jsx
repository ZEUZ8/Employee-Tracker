import React, { useState } from 'react';
// import { Swipeable } from 'react-swipeable';

const Swipe = ({ onSwipeLeft, onSwipeRight }) => {
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleSwiped = (eventData) => {
    if (eventData.dir === 'Left' && onSwipeLeft) {
      onSwipeLeft();
    } else if (eventData.dir === 'Right' && onSwipeRight) {
      onSwipeRight();
    }
    setSwipeDirection(eventData.dir);
  };

  return (
    <Swipeable
      onSwiped={handleSwiped}
      preventDefaultTouchmoveEvent
      trackMouse
    >
      <div
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: swipeDirection === 'Left' ? 'red' : swipeDirection === 'Right' ? 'green' : 'gray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Swipe Me
      </div>
    </Swipeable>
  );
};

export default Swipe;
