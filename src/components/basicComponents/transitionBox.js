import React, { useState, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';

const TransitionBox = props => {
  const {
    isVisible,
    transitionTime = 0.25,
    transitionType = 'ease-in',
    sx,
    children,
    isVisibleByDefault = false,
  } = props;
  const [height, setHeight] = useState(isVisibleByDefault ? null : 0);
  const ref = useRef();

  useEffect(() => {
    if (isVisible) {
      setHeight(ref.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isVisible]);

  return (
    <Box
      sx={{
        height: height !== null ? `${height}px` : null,
        overflow: 'hidden',
        transition: `height ${transitionTime}s ${transitionType}`,
        ...sx,
      }}
      ref={ref}
    >
      <Box sx={{ paddingTop: '0.5rem' }}>{children}</Box>
    </Box>
  );
};

export default TransitionBox;
