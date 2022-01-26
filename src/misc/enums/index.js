import cf from "./../../assets/img/coffee-cup.png";
import tea from "./../../assets/img/tea-cup.png";
import juice from "./../../assets/img/juice.png";
import smoothie from "./../../assets/img/smoothie.png";
import softDrink from "./../../assets/img/soft-drink.png";
import soda from "./../../assets/img/soda.png";
import yogurt from "./../../assets/img/yogurt.png";
import food from "./../../assets/img/food.png";

export const menu = [
  {
    x: 0,
    y: 0,
    w: 2,
    h: 7.5,
    i: "Coffee",
    cover: cf,
    img: `<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--whh"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1026 1026"
          >
            <path
              d="M928 909q-9-45-111-171T564.5 461.5T288 209T117 98q84-78 209.5-94T587 38.5t242.5 158t158 242.5t34.5 260.5T928 909zM461.5 564.5Q612 715 738 817t171 111q-84 78-209.5 94T439 987.5t-242.5-158T38.5 587T4 326.5T98 117q9 45 111 171t252.5 276.5z"
              fill="currentColor"
            ></path>
          </svg>`,
    static: true,
    products: [
      { id: 1, name: "Đen đá", price: "10.000" },
      { id: 2, name: "Sữa đá", price: "12.000" },
      { id: 3, name: "Bạc xỉu", price: "12.000" },
    ],
  },
  {
    x: 2,
    y: 0,
    w: 2,
    h: 7.5,
    i: "Tea",
    cover: tea,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" fill="currentColor"></path></svg>`,
    static: true,
  },
  {
    x: 4,
    y: 0,
    w: 2,
    h: 7.5,
    i: "Juice",
    cover: juice,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M57.248 8.516C55.092 3.208 48.967.622 43.565 2.739c-4.12 1.617-6.622 5.504-6.624 9.611h-9.22l-3.427-3.367c-2.547-2.504-6.68-2.505-9.228 0L6 17.889l1.384 1.36l9.066-8.907c1.784-1.753 4.676-1.752 6.46 0l2.043 2.008h-2.321c4.678 10.872-9.544 30.563 7.001 33.872c-.011.005-.024.01-.014.014c5.057 1.752 4.787 5.931 3.136 9.865c-1.749 4.167-5.938 4.927-5.977 4.951c-.124.072-.197.3-.179.537c.023.236.13.411.259.411h16.606c.128 0 .237-.175.257-.411c.021-.237-.056-.465-.179-.537c-.04-.024-4.226-.784-5.976-4.951c-1.651-3.935-1.92-8.113 3.135-9.865c.012-.004-.003-.009-.014-.014c12.04-2.407 7.791-13.489 6.385-23.536a10.645 10.645 0 0 0 4.298-.726c5.401-2.116 8.032-8.136 5.878-13.444M35.161 44.933c-20.91 0-6.216-20.987-10.509-31.657h1.244l8.318 8.172c-2.004-.602-4.11-1.093-6.411-1.093c-.343 0-.688.011-1.041.034c-.073 3.786-1.135 8.093-1.513 11.946c-.594 6.073.518 11.021 9.911 11.021c7.82 0 9.899-3.431 10.035-8.083c.101-3.494-.893-7.677-1.381-11.619c-.141.006-.28.008-.421.008c-1.707 0-3.383-.398-5.091-.915l-9.641-9.472h8.318c.09.974.317 1.951.705 2.906c1.331 3.281 4.18 5.518 7.437 6.252c1.297 10.474 5.868 22.5-9.96 22.5m7.781-14.908l.26-.255c.22 1.453.4 2.852.456 4.155c-.087.002-.176.004-.266.004c-2.104 0-4.268-.707-6.559-1.456c-2.647-.864-5.648-1.845-9.028-1.845c-.272 0-.543.006-.816.019c.131-.937.287-1.897.448-2.894c.316-1.953.641-3.959.782-5.893c2.724.077 5.227.896 7.649 1.689c.241.079.479.153.719.23l6.355 6.246m-2.51-5.187c.674.135 1.352.245 2.043.293c.1.68.209 1.354.317 2.026l-2.36-2.319m2.742-4.481c.272-.035.454-.271.654-.281c.055-.003.49-.876 1.014-1.991c-.003.233-.006.466-.002.703c-.359.858-.631 1.546-.67 1.762c-.033.198.239.313.303.504c.029.089.226.161.521.219l.05.472c-2.957-.739-5.528-2.801-6.746-5.8a9.557 9.557 0 0 1-.652-2.669h.589c.029.919.11 1.666.238 1.762c.216.162.518.121.665.251c.078.067 3.511-1.175 5.578-2.013h.515c-1.93.737-5.452 2.102-5.909 2.412c-.167.117-.058.386-.151.563c-.252.472 3.562 4.159 4.003 4.106m7.949 1.001a9.972 9.972 0 0 1-4.139.673c-.025-.198-.048-.396-.071-.593c1.527.044 3.231-.043 3.381-.231c.17-.211.126-.502.26-.646c.103-.11-2.66-7.141-2.829-6.896c-.145.209-.352.078-.487-.015c.127-.444.271-.88.451-1.3H46.13c.004-.157.171-.32.191-.383c0 0-6.414-2.746-7.175-2.874c-.203-.036-.321.229-.517.289c-.271.086-.397 1.55-.407 2.968H37.6c.002-3.852 2.347-7.494 6.209-9.009c5.063-1.985 10.808.438 12.827 5.415c2.019 4.975-.448 10.619-5.513 12.602" fill="currentColor"></path><path d="M50.52 3.654c-.167-.507-5.552-.496-5.824-.155c-.167.211-.124.504-.258.647c-.103.111 2.663 7.142 2.83 6.897c.191-.278.499.05.591.078c0 0 2.828-6.226 2.961-6.966c.035-.196-.237-.312-.3-.501" fill="currentColor"></path><path d="M56.487 9.602c-.217-.164-.517-.123-.668-.252c-.112-.1-7.353 2.585-7.102 2.746c.287.187-.052.485-.083.575c0 0 6.417 2.745 7.176 2.876c.205.034.323-.231.518-.293c.521-.161.511-5.39.159-5.652" fill="currentColor"></path><path d="M43.527 4.294c-.486-.244-4.287 3.459-4.231 3.887c.036.265.276.442.289.636c.01.149 7.082 3.223 7.023 2.934c-.066-.329.391-.305.477-.349c0 0-2.536-6.346-2.979-6.96c-.121-.165-.398-.059-.579-.148" fill="currentColor"></path><path d="M48.566 13.059c.067.329-.391.308-.477.352c0 0 2.537 6.343 2.981 6.959c.118.162.395.057.575.146c.487.243 4.287-3.461 4.231-3.888c-.033-.264-.278-.44-.288-.636c-.008-.147-7.08-3.22-7.022-2.933" fill="currentColor"></path><path d="M48.147 11.345c.34-.067.318.378.362.462c0 0 6.533-2.462 7.168-2.894c.167-.114.058-.386.15-.562c.251-.472-3.563-4.16-4.003-4.107c-.272.034-.455.271-.655.283c-.15.008-3.315 6.874-3.022 6.818" fill="currentColor"></path></svg>`,
    static: false,
  },
  {
    x: 6,
    y: 0,
    w: 2,
    h: 7.5,
    i: "Smoothie",
    cover: smoothie,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="26" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 832 1024"><path d="M768 256h-6l-26 320H573q-11-55-55-91.5T416 448t-102 36.5t-55 91.5H96L70 256h-6q-27 0-45.5-18.5T0 192.5T18.5 147T64 128V64q0-27 18.5-45.5T128 0h576q26 0 45 18.5T768 64v64q26 0 45 19t19 45.5t-19 45t-45 18.5zM259 640q11 55 55 91.5T416 768t102-36.5t55-91.5h158l-27 320q-4 24-21.5 44t-42.5 20H192q-25 0-42.5-20T128 960l-27-320h158z" fill="currentColor"></path></svg>`,
    static: false,
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 7.5,
    i: "Soft drink",
    cover: softDrink,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M245.7 42.3l-32-32a8.1 8.1 0 0 0-11.4 11.4l1.5 1.4l-55.1 41.4l-38.3 7.7a8.5 8.5 0 0 0-4.1 2.1L21.7 159a23.9 23.9 0 0 0 0 34L63 234.3a23.9 23.9 0 0 0 34 0l84.7-84.6a8.5 8.5 0 0 0 2.1-4.1l7.7-38.3l41.4-55.1l1.4 1.5a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4zM74.3 223L33 181.7a8 8 0 0 1 0-11.4l7-7L92.7 216l-7 7a8.1 8.1 0 0 1-11.4 0zM177.6 99.2a8.3 8.3 0 0 0-1.4 3.2l-7.6 37.7l-8.6 8.6L107.3 96l8.6-8.6l37.7-7.6a8.3 8.3 0 0 0 3.2-1.4l58.4-43.8l6.2 6.2z" fill="currentColor"></path></svg>`,
    static: false,
  },
  {
    x: 2,
    y: 4,
    w: 2,
    h: 7.5,
    i: "Soda",
    cover: soda,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="20" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 1024"><path d="M576 384l-64 576q-5 24-20 44t-36 20H184q-21 0-36.5-20T128 960L64 384q-26 0-45-18.5t-19-45T19 275t45-19h315l56-224q4-17 18-26t30-4.5t24 20t4 32.5l-50 202h115q26 0 45 19t19 45.5t-19 45t-45 18.5z" fill="currentColor"></path></svg>`,
    static: false,
  },
  {
    x: 4,
    y: 6,
    w: 2,
    h: 7.5,
    i: "Yogurt",
    cover: yogurt,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19.574a2 2 0 0 1 .304-1.06L17 11h14l4.696 7.514a2 2 0 0 1 .304 1.06V42a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V19.574z"></path><path d="M19 33v-9l5 6l5-6v9"></path><path d="M17 4h14v7H17V4z"></path></g></svg>`,
    static: false,
  },
  {
    x: 6,
    y: 4,
    w: 2,
    h: 7.5,
    i: "Other",
    cover: food,
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z" fill="currentColor"></path></svg>`,
    static: false,
  },
];
