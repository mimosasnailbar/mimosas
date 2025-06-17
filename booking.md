---
layout: default
---
<section class="wrapper home__main">
    <div id="imageToggle">
        <div class="home__image" v-bind:style="{ backgroundImage: `url('${src}')` }">
            <div class="home__buttons">
                  <h1>Choose Your Booking</h1>
    <a href="https://liamnailspa2kevinelifenailspa6100.simplepos.us/" class="btn-booking" target="_blank">Booking 1</a>
    <a href="https://example.com/booking2" class="btn-booking" target="_blank">Booking 2</a>
    <a href="https://example.com/booking3" class="btn-booking" target="_blank">Booking 3</a>
          </div>
           </div></div>
</section>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f7f7f7;
    }

    .booking-buttons {
      text-align: center;
    }

    .booking-buttons h1 {
      color: #a45f95;
      margin-bottom: 30px;
    }

    .btn-booking {
      display: inline-block;
      margin: 10px;
      padding: 15px 30px;
      background-color: #a45f95;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .btn-booking:hover {
      background-color: #8e4c7a;
    }

    @media screen and (max-width: 600px) {
      .btn-booking {
        width: 80%;
        font-size: 18px;
      }
    }
  </style>






