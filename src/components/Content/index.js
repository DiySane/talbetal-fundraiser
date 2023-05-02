import "./styles.css";

const Content = () => {
  return (
    <div class="background">
      <div class="content">
        <iframe
          class="youtube-video"
          src={process.env.REACT_APP_IFRAME_URL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="space"></div>
        <div class="button-background">
        <a
          class="button"
          href="https://coindrop.to/talbetalpuppet"
          target="_blank"
        >
          <img
            src="https://coindrop.to/embed-button.png"
            class="button-image"
            //   style="border-radius: 10px; height: 57px !important;width: 229px !important;"
            alt="Tip as you please"
          ></img>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
