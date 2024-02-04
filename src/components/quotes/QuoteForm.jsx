import { Fragment, startTransition, useRef, useState } from 'react';

import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { Prompt } from 'react-router-dom/cjs/react-router-dom';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }

  const onFocusHandler = () => {
    setIsEntering(true)
  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={(location) => `Are you sure you want to leave? All your entered data will be lost`} />
      <Card>
          <form
            className={classes.form}
            onSubmit={submitFormHandler}
            onFocus={onFocusHandler}
          >
            {props.isLoading && (
              <div className={classes.loading}>
                <LoadingSpinner />
              </div>
            )}

            <div className={classes.control}>
              <label htmlFor="author">Author</label>
              <input type="text" id="author" ref={authorInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="text">Text</label>
              <textarea id="text" rows="5" ref={textInputRef}></textarea>
            </div>
            <div className={classes.actions}>
              <button className="btn" onClick={finishEnteringHandler}>
                Add Quote
              </button>
            </div>
          </form>;
        
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
