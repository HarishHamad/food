import React, { Component } from 'react'

export default class Event extends Component {
  render() {
    const style ={backgroundImage:"url(assets/img/events-1.jpg"}
    const style2 ={backgroundImage:"url(assets/img/events-2.jpg)"}
    const style3 ={backgroundImage3: "url(assets/img/events-3.jpg)"}
    return (
        
      <div>
        
         <section id="events" class="events">
      <div class="container-fluid" >

        <div class="section-header">
          <h2>Events</h2>
          <p>Share <span>Your Moments</span> In Our Restaurant</p>
        </div>

        <div class="slides-3 swiper" >
          <div class="swiper-wrapper">

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={style}>
              <h3>Custom Parties</h3>
              <div class="price align-self-start">$99</div>
              <p class="description">
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div>

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={style2}>
              <h3>Private Parties</h3>
              <div class="price align-self-start">$289</div>
              <p class="description">
                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
              </p>
            </div>

            <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={style3}>
              <h3>Birthday Parties</h3>
              <div class="price align-self-start">$499</div>
              <p class="description">
                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
              </p>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
      </div>
    )
  }
}
