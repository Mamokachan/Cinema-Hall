'use strict';

function html() {
    const root = document.getElementById('main');
    let text = '';
    for (let i = 0; i < 5; i += 1) {
        text += `<!-- el start -->

    <div class="el">
      <div class="el__overflow">
        <div class="el__inner">
          <div class="el__bg"></div>
          <div class="el__preview-cont">
            <h2 class="el__heading"></h2>
          </div>
          <div class="el__content">
            <div class="el__text"></div>
            <div class="el__inner__component">
              <div class="el__details"> </div>
              <div class="el__plots"> </div>
              <div class="el__seans"> </div>
              <iframe class="el__player" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div class="el__index">
        <!-- <div class="el__index-back"></div> -->
        <div class="el__index-front">
          <!-- <div class="el__index-overlay"></div> -->
        </div>
      </div>
    </div>

    <!-- el end -->`;
    }
    root.innerHTML = text;
}

html();