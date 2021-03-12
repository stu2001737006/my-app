import React, {useEffect} from 'react';
import SelectYear from './SelectYear';
import SelectGenres from './SelectGenres';
import SelectCriterion from './SelectCriterion';
import {Button} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Filters = (props) => {

    const selectedYear = useSelector(state => state.selectedFilters.selectedYear);
    const selectedGenres = useSelector(state => state.selectedFilters.selectedGenres);
    const selectedCriterion = useSelector(state => state.selectedFilters.selectedCriterion);
    
    const dispatch = useDispatch();
    
    const loadMovies = () => {
        dispatch(getMovies({
            year: selectedYear,
            page: 1,
            with_genres: selectedGenres.toString(),
            with_criterion: selectedCriterion.toString(),
        }));
    }

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <>    
            <div className="m-4">   
                <div className="row">
                    <div className="col-md-4">
                        <SelectCriterion/>
                    </div>
                    <div className="col-md-4">
                        <SelectYear/>
                    </div>
                    <div className="col-md-4">
                        <SelectGenres/>
                    </div>
                </div>
            </div>
            <div className="row m-2">
                <div className="col">
                    <Button color="danger" onClick={loadMovies}>Търси <FontAwesomeIcon icon={faSearch} /></Button>
                </div>
            </div>
        </>
    );
    
}

export default Filters;