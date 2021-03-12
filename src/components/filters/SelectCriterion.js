import { FormGroup, Label, Input } from 'reactstrap';
import { setSelectedCriterion } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SelectCriterion = (props) => {

    const selectedCriterion = useSelector(state => state.selectedFilters.selectedCriterion);
    const dispatch = useDispatch();

    const changeSelectedCriterion = (event) => {
        dispatch(setSelectedCriterion(event.target.value));
    }
    return (
        <FormGroup>
            <Label for="select-criterion">Избери Критерий</Label>
            <Input 
            onChange={changeSelectedCriterion} 
            value={selectedCriterion}
            type="select" 
            name="select" 
            id="select-criterion"
            >
            <option value="upcoming">Тренд филми</option>
            <option value="top_rated">Най-високо оценени</option>
            <option value="popular">Най-популярни</option>

            </Input>
        </FormGroup>
    );
}

export default SelectCriterion;