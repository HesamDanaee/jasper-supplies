export interface ISlider {
  slides: ISlide[];
  blobs: IBlobs;
  bar: IBar;
  colors: ["biscuits", "sea", "animal", "herbs", "honey", "nuts"];
}

export interface ISlide {
  name: string;
  items: Item[];
  initial: {
    [key: string]: string | number;
  };
  animate: {
    [key: string]: string | number;
  };
  transition: {
    [key: string]: string | number;
  };
}

export interface Item {
  src: string;
  name: string;
  initial: {
    [key: string]: string | number;
  };
  animate: {
    [key: string]: string | number;
  };
  transition: {
    [key: string]: string | number;
  };
  exit: {
    [key: string]: string | number;
  };
}

export interface IBlobs {
  shapes: string[];
  initial: {
    [key: string]: string | number;
  };
  animate: {
    [key: string]: string | number;
  };
  transition: {
    [key: string]: string | number;
  };
}

export interface IBar {
  initial: {
    [key: string]: string | number;
  };
  animate: {
    [key: string]: string | number;
  };
  transition: {
    [key: string]: string | number;
  };
  line: {
    initial: {
      [key: string]: string | number;
    };
    animate: {
      [key: string]: string | number;
    };
    transition: {
      [key: string]: string | number;
    };
    dot: {
      initial: {
        [key: string]: string | number;
      };
      animate: {
        [key: string]: string | number;
      };
      transition: {
        [key: string]: string | number;
      };
    };
  };
}
