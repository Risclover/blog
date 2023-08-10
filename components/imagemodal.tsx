import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";

type Props = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

function ImageModal({ imgSrc, imgAlt, title, description }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = "unset";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer mx-auto w-[100%]">
        <img src={imgSrc} alt={imgAlt} className="ribbit-main my-10" />
      </div>
      <Lightbox
        plugins={[Captions, Video]}
        open={open}
        close={handleClick}
        slides={[
          {
            src: imgSrc,
            title: title,
            description: description,
          },
        ]}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}

export default ImageModal;
