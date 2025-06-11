<template>
  <div class="main__academy">
    <div style="padding-left: 30px; padding-top: 30px">
      <h1 style="font-size: 64px">Faith Academy</h1>
      <p style="font-size: 24px; font-weight: 400">
        Building the foundations of your faith in Christ. No assumptions. Using only the Bible as
        the source of truth.
      </p>
    </div>
    <div style="font-size: 24px; padding-left: 30px">
      <h2>What you will learn:</h2>
      <ul>
        <li>The building blocks of the renewed man: faith, hope & love.</li>
        <li>The deity of Christ.</li>
        <li>The gift & ministry of the Holy Spirit.</li>
        <li>The forgiveness of sin.</li>
        <li>Righteousness by faith.</li>
        <li>Partakers.</li>
        <li>Law vs Grace.</li>
      </ul>
      <p style="padding-top: 10px">and so much more...</p>
    </div>
    <div class="academy__action">
      <p style="font-style: italic">
        Study to show thyself approved unto God, a workman who needeth not to be ashamed, rightly
        dividing the word of truth. - 2 Timothy 2:15.
      </p>
      <button type="button" id="academy__button">Sign up for faith academy</button>
    </div>
  </div>
</template>

<style scoped>
.main__academy {
  position: relative;
  width: 100%;
  height: 533px;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main__academy::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../img/academy.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}

.academy__action {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
}

#academy__button {
  width: 244px;
  height: 51px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border: none;
  background-color: var(--dark-turquoise);
  color: white;
}
</style>
