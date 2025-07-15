import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Photo1 from "../public/images/projects/ribbit/hero-carousel-img-1.png";
import Photo2 from "../public/images/projects/ribbit/hero-carousel-img-2.png";
import Photo3 from "../public/images/projects/ribbit/hero-carousel-img-3.png";
import Photo4 from "../public/images/projects/ribbit/features/community-screenshot.png";

type Props = {};

export default function HeroImageCarousel({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [showToggle, setShowToggle] = useState(true);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const handleClick = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = "unset";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };
  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  const slides = [
    { src: Photo1.src, title: "Hi" },
    { src: Photo2.src, title: "Bye" },
    { src: Photo3.src, title: "Wee" },
    { src: Photo4.src, title: "Community" },
  ];

  const inline = {
    style: {
      width: "100%",
      maxWidth: "68rem",
      aspectRatio: "3 / 2",
      margin: "0 auto",
      backgroundColor: "red",
    },
  };

  return (
    <div className="hero-img-carousel">
      <Lightbox
        index={index}
        on={{ view: updateIndex(false), click: toggleOpen(true) }}
        plugins={[Inline, Thumbnails, Captions, Fullscreen]}
        slides={slides}
        carousel={{
          padding: 10,
          spacing: 0,
          imageFit: "contain",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "65rem",
            aspectRatio: "5/3",
            margin: "2.5rem auto",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
        captions={{ showToggle }}
      />
      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 60 }}
        // controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />{" "}
    </div>
  );
}
