/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/08/2022 - 15:47:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState } from "react";

const UncontrolledOnboarding = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedOnboardingData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updatedOnboardingData);

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedOnboardingData);
    }

    setOnboardingData(updatedOnboardingData);
  };

  // this will choose the current Step(position/component) to render
  const currentChild = React.Children.toArray(children)[currentIndex];

  // all children of UncontrolledOnboarding will be able to...
  // the goToNext function prop
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default UncontrolledOnboarding;