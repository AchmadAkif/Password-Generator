import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 24,
    label: '24',
  },
  {
    value: 32,
    label: '32',
  },
];

export default function DiscreteSliderLabel() {

  function valuetext(value) {
    
  }
  
  return (
    <Box>
      <Slider
        defaultValue={8}
        min={0}
        max={32}
        getAriaValueText={valuetext}
        step={4}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}