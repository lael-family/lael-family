<template>
  <div style="padding: 30px">
    <div class="prayer__board">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <div>
          <h2>Prayer Board</h2>
          <p>
            Find out what is on God’s todo list and let’s join hands to pray it into physical
            manifestation
          </p>
        </div>
        <h2 style="color: var(--dark-turquoise); text-decoration: underline">See more</h2>
      </div>
      <div class="prayer__cards">
        <div id="prayer__card">
          <img
            src="/img/hero.jpg"
            alt="people praying together"
            style="
              object-fit: fill;
              width: 350px;
              height: 160px;
              border-top-right-radius: 8px;
              border-top-left-radius: 8px;
            "
          />
          <h2>Topic</h2>
          <p>Sample prayer topic</p>
          <h2>Prayer</h2>
          <p>Sample prayer point</p>
          <h2>Bible Verse</h2>
          <p>Sample Bible verses</p>
        </div>
        <div id="prayer__card">
          <img
            src="/img/hero.jpg"
            alt="people praying together"
            style="
              object-fit: fill;
              width: 350px;
              height: 160px;
              border-top-right-radius: 8px;
              border-top-left-radius: 8px;
            "
          />
          <h2>Topic</h2>
          <p>Sample prayer topic</p>
          <h2>Prayer</h2>
          <p>Sample prayer point</p>
          <h2>Bible Verse</h2>
          <p>Sample Bible verses</p>
        </div>
        <div id="prayer__card">
          <img
            src="/img/hero.jpg"
            alt="people praying together"
            style="
              object-fit: fill;
              width: 350px;
              height: 160px;
              border-top-right-radius: 8px;
              border-top-left-radius: 8px;
            "
          />
          <h2>Topic</h2>
          <p>Sample prayer topic</p>
          <h2>Prayer</h2>
          <p>Sample prayer point</p>
          <h2>Bible Verse</h2>
          <p>Sample Bible verses</p>
        </div>
        <div id="prayer__card">
          <img
            src="/img/hero.jpg"
            alt="people praying together"
            style="
              object-fit: fill;
              width: 350px;
              height: 160px;
              border-top-right-radius: 8px;
              border-top-left-radius: 8px;
            "
          />
          <h2>Topic</h2>
          <p>Sample prayer topic</p>
          <h2>Prayer</h2>
          <p>Sample prayer point</p>
          <h2>Bible Verse</h2>
          <p>Sample Bible verses</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prayer__cards {
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: auto auto auto auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

#prayer__card {
  height: 400px;
  width: 350px;
  background-color: #d9d9d9;
  border-radius: 8px;
}

#prayer__card > h2 {
  font-size: 16px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 8px;
}

#prayer__card > p {
  font-size: 14px;
  padding-left: 16px;
}
</style>
