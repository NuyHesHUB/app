import {useState, useRef, useEffect }from 'react';

const MovieForm = ({addMovie}) => {
    useEffect(()=>{
        inputRef.current.focus()
      },[]);
  const [movieTitle, setMovieTitle]=useState('');
  const [movieYear, setMovieYear]=useState('');
  const [titleError, setTitleError]=useState('');
  const [yearError, setYearError]=useState('');
  const validateForm= () => {
    resetErrors();
    let validate=true;
    if(!movieTitle){
        setTitleError('영화제목을 입력하세요')
        validate=false;
    }
    if(!movieYear){
        setYearError('개봉년도를 입력하세요')
        validate=false;
    }
    return validate;
  }
  const resetErrors=() => {
    setTitleError('');
    setYearError('');
  }
  const inputRef=useRef();
  const onSubmit=(e)=>{
    e.preventDefault();
    if(validateForm()){
        addMovie({
            id:Date.now(),
            title:movieTitle,
            year:movieYear
        })
    }
    /* resetErrors(); */
    setMovieTitle('');
    setMovieYear('');
    inputRef.current.focus()
  }
    return (
        <div>
            <form action="#" onSubmit={onSubmit}>
                <input type="text" placeholder='영화제목을 쓰세요' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}} ref={inputRef}/>
                <div className='err'>{titleError}</div>
                <input type="text" placeholder='개봉년도를 쓰세요' value={movieYear} onChange={(e)=>{setMovieYear(e.target.value)}}/>
                <div className='err'>{yearError}</div>
                <button type='submit' className='btn'>ADD</button>
            </form>
        </div>
    );
};

export default MovieForm;