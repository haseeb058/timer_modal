import React, { useState } from "react";

import Button from "components/button";
import Modal from "components/modal";
import style from "app.module.scss";
import Counter from "components/Counter";
const App = () => {
  const [isOpen, setisOpen] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const handleNext = () => {
    setFormStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setFormStep((prev) => prev - 1);
  };

  return (
    <div className="App">
      <Button title={"Open Modal"} onClick={() => setisOpen(true)} />

      <Modal open={isOpen}>
        <h2 className={style.title}>setp {formStep + 1}</h2>
        <div className={style.bodyWrapper}>
          {formStep === 0 && <h1>this is popup step 1</h1>}
          {formStep === 1 && <Counter />}
          {formStep === 2 && <h1>The assignment is complete!</h1>}
        </div>
        <div className={style.btnWrapper}>
          <Button
            onClick={handlePrev}
            disabled={formStep === 0 && true}
            title={"Prev"}
          />
          <Button
            onClick={handleNext}
            className={style.btnNext}
            disabled={formStep === 2 && true}
            title={"Next Step"}
          />
          <Button
            onClick={() => {
              setFormStep(0);
              setisOpen(false);
            }}
            title={"close modal"}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
