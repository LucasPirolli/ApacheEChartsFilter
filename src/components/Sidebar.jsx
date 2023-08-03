import React, { useState } from "react";
import "../styles/Sidebar.scss";
import { Accordion, Icon, Checkbox } from "semantic-ui-react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Sidebar = ({ onFilterChange, onMonthChange, xAxisDataBar }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const handleMonthChange = (month) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }

    onMonthChange(selectedMonths);
  };

  return (
    <>
      <nav className="lateral">
        <ul>
          <h3>Filtros</h3>
          <li>
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                Ajuste de escala
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Slider
                  aria-label="slider"
                  defaultValue={100}
                  onChange={(value) => onFilterChange(value)}
                >
                  <SliderTrack bg="gray.100">
                    <SliderFilledTrack bg="gray" />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                Principal mês
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                {xAxisDataBar.map((month) => (
                  <Checkbox
                    key={month}
                    label={month}
                    checked={selectedMonths.includes(month)}
                    onChange={() => handleMonthChange(month)}
                  />
                ))}
              </Accordion.Content>
            </Accordion>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
