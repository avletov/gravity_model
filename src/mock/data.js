export const parametersDefault = {
  common: {
    scale: 1,
    posX: 0,
    posY: 0,
    time: 0,
    dt: 0.001
  },
  physicalConstants: {
    G: 100,
    T: 1
  },
  bodies: [
    {
      name: "Тело №1",
      number: 1,
      physical: {
        m: 100,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
      },
      radius: 0,
      color: "rgb(235, 229, 88)"
    },
    {
      name: "Тело №2",
      number: 2,
      physical: {
        m: 100,
        x: 50,
        y: 0,
        vx: 0,
        vy: 10
      },
      radius: 0,
      color: "rgb(186, 182, 181)"
    }
  ]
};

export const parametersSolar = {
  common: {
    scale: 0.000000001,
    posX: 0,
    posY: 0,
    time: 0,
    dt: 0.001
  },
  physicalConstants: {
    G: 6.67e-11,
    T: 86400
  },
  bodies: [
    {
      name: "Солнце",
      number: 1,
      physical: {
        m: 1.9885e30,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
      },
      radius: 6.955e8,
      isStar: true,
      color: "rgb(235, 229, 88)",
      shadowColor: "rgb(235, 229, 88, 0.2)"
    },
    {
      name: "Меркурий",
      number: 2,
      physical: {
        m: 3.33022e23,
        x: 5.579e10,
        y: 0,
        vx: 0,
        vy: 47360
      },
      radius: 2.4397e6,
      color: "rgb(186, 182, 181)"
    },
    {
      name: "Венера",
      number: 3,
      physical: {
        m: 4.8675e24,
        x: 1.082e11,
        y: 0,
        vx: 0,
        vy: 35020
      },
      radius: 6.0518e6,
      color: "rgb(177, 174, 157)"
    },
    {
      name: "Земля",
      number: 4,
      physical: {
        m: 5.9726e24,
        x: 1.496e11,
        y: 0,
        vx: 0,
        vy: 29783
      },
      radius: 6.371e6,
      color: "rgb(139, 153, 255)"
    },
    {
      name: "Марс",
      number: 5,
      physical: {
        m: 6.4171e23,
        x: 2.279e11,
        y: 0,
        vx: 0,
        vy: 24077
      },
      radius: 3.3895e6,
      color: "rgb(220, 146, 43)"
    },
    {
      name: "Юпитер",
      number: 6,
      physical: {
        m: 1.8986e27,
        x: 7.785472e11,
        y: 0,
        vx: 0,
        vy: 13070
      },
      radius: 6.9911e7,
      color: "rgb(181, 149, 109)"
    },
    {
      name: "Сатурн",
      number: 7,
      physical: {
        m: 5.6846e26,
        x: 1.429394e12,
        y: 0,
        vx: 0,
        vy: 9690
      },
      radius: 5.8232e7,
      color: "rgb(221, 192, 126)"
    },
    {
      name: "Уран",
      number: 8,
      physical: {
        m: 8.6832e25,
        x: 2.876679e12,
        y: 0,
        vx: 0,
        vy: 6810
      },
      radius: 2.5362e7,
      color: "rgb(139, 166, 177)"
    },
    {
      name: "Нептун",
      number: 9,
      physical: {
        m: 1.0243e26,
        x: 4.503443e12,
        y: 0,
        vx: 0,
        vy: 5434
      },
      radius: 2.4622e7,
      color: "rgb(72, 114, 252)"
    },
    {
      name: "Плутон",
      number: 10,
      physical: {
        m: 1.303e22,
        x: 5.906441e12,
        y: 0,
        vx: 0,
        vy: 4669
      },
      radius: 1.188e6,
      color: "rgb(216, 200, 184)"
    }
  ]
};

export const parametersAlphaCentauri = {
  common: {
    scale: 0.00000000001,
    posX: 0,
    posY: 0,
    time: 0,
    dt: 0.001
  },
  physicalConstants: {
    G: 6.67e-11,
    T: 10000000
  },
  bodies: [
    {
      name: "Альфа Центавра A",
      number: 1,
      physical: {
        m: 1.14 * 1.9885e30,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
      },
      radius: 1.23 * 6.955e8,
      color: "rgb(239, 231, 130)",
      isStar: true,
      shadowColor: "rgb(239, 231, 130, 0.1)"
    },
    {
      name: "Альфа Центавра B",
      number: 2,
      physical: {
        m: 0.87 * 1.9885e30,
        x: 23.4 * 1.496e11,
        y: 0,
        vx: 0,
        vy: 22445 * 0.385
      },
      radius: 0.91 * 6.955e8,
      color: "rgb(246, 220, 146)",
      isStar: true,
      shadowColor: "rgb(246, 220, 146, 0.1)"
    },
    {
      name: "Проксима Центавра",
      number: 3,
      physical: {
        m: 0.123 * 1.9885e30,
        x: 15000 * 1.496e11,
        y: 0,
        vx: 0,
        vy: 3900
      },
      radius: 0.145 * 6.955e8,
      color: "rgb(250, 107, 103)",
      isStar: true,
      shadowColor: "rgb(250, 107, 103, 0.1)"
    }
  ]
};

export const parametersAntares = {
  common: {
    scale: 10e-13,
    posX: 0,
    posY: 0,
    time: 0,
    dt: 0.001
  },
  physicalConstants: {
    G: 6.67e-11,
    T: 1e10
  },
  bodies: [
    {
      name: "Антарес A",
      number: 1,
      physical: {
        m: 12.4 * 1.9885e30,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
      },
      radius: 400 * 6.955e8,
      color: "rgb(254, 164, 68)",
      isStar: true,
      shadowColor: "rgb(254, 164, 68, 0.3)"
    },
    {
      name: "Антарес B",
      number: 2,
      physical: {
        m: 10 * 1.9885e30,
        x: 550 * 1.496e11,
        y: 0,
        vx: 0,
        vy: 5800
      },
      radius: 5.2 * 6.955e8,
      color: "rgb(201, 252, 202)",
      isStar: true,
      shadowColor: "rgb(201, 252, 202, 0.1)"
    }
  ]
};

export const parametersSirius = {
  common: {
    scale: 10e-11,
    posX: 0,
    posY: 0,
    time: 0,
    dt: 0.001
  },
  physicalConstants: {
    G: 6.67e-11,
    T: 1e8
  },
  bodies: [
    {
      name: "Сириус A",
      number: 1,
      physical: {
        m: 2.063 * 1.9885e30,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0
      },
      radius: 1.711 * 6.955e8,
      color: "rgb(240, 250, 255)",
      isStar: true,
      shadowColor: "rgb(50, 200, 255, 0.5)"
    },
    {
      name: "Сириус B",
      number: 2,
      physical: {
        m: 1.018 * 1.9885e30,
        x: 20 * 1.496e11,
        y: 0,
        vx: 0,
        vy: 11500
      },
      radius: 0.0084 * 6.955e8,
      color: "rgb(255, 255, 255)",
      isStar: true,
      shadowColor: "rgb(0, 100, 255, 0.2)"
    }
  ]
};
