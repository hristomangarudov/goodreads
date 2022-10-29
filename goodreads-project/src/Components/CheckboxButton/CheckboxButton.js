import React,{ useState} from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch, useSelector } from "react-redux";
import { getRadioValue } from "../../store/selectCategorySlice";

export default function CheckboxBtn() {
    const dispatch = useDispatch()
    const radioValue = useSelector((state) =>state.category.radioValue)
    const radios = [
        { name: 'Fiction', value: 'Fiction' },
        { name: 'Cooking', value: 'Cooking' },
        { name: 'Education', value: 'Education' },
        { name: 'Architecture', value: 'Architecture' },
        { name: 'Art', value: 'Art' },
        { name: 'Philosophy', value: 'Philosophy' },
        { name: 'Psychology', value: 'Psychology' },
        { name: 'Science', value: 'Science' },
        { name: 'Drama', value: 'Drama' },
        { name: 'History', value: 'History' },
      ];
    const handleChange = (e)=>{
      dispatch(getRadioValue(e.currentTarget.value)) 
    }
    return(
        <ButtonGroup className="categories-group">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-primary' : 'outline-info'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
    )
}

