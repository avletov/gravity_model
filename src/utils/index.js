const BODY_DEFAULT_COLOR = "rgb(240, 230, 130)";

/*
 * Возвращает список значений параметра по имени
 *
 * @param {parameterName} - имя физического параметра
 * @param {data} - объект с данными
 *
 * @return {array} - список значений параметра
 */
export function getPhysicalParameters({ bodies }) {
  let result = {};

  bodies.forEach(({ physical }) => {
    Object.entries(physical).forEach(([parameter, value]) => {
      if (result[parameter]) {
        result[parameter].push(value);
      } else {
        result[parameter] = [value];
      }
    });
  });

  return result;
}

//Расчет проекций сил на оси
export function calcForseAxial(G, m1, m2, x1, x2, y1, y2, axis) {
  const hypotenuse = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
  const delta = axis === "x" ? x2 - x1 : y2 - y1;
  const F = (((G * m1 * m2) / hypotenuse) * delta) / Math.sqrt(hypotenuse);

  return F;
}

//Расчет новых координат
export function calcNewCoordsAndSpeeds(data, frequency = 1) {
  const { common, physicalConstants, bodies } = data;
  const numberOfBodies = bodies.length;

  const { G, T } = physicalConstants;
  const dt = common.dt * T;

  for (let iter = 0; iter < frequency; iter++) {
    let { m, x, y, vx, vy } = getPhysicalParameters(data);

    for (let i = 0; i < numberOfBodies; i++) {
      let fx_i = 0;
      let fy_i = 0;

      for (let j = 0; j < numberOfBodies; j++) {
        if (i === j) {
          continue;
        }

        const calcParams = [G, m[i], m[j], x[i], x[j], y[i], y[j]];

        const fx_i_j = calcForseAxial(...calcParams, "x");
        const fy_i_j = calcForseAxial(...calcParams, "y");

        fx_i += fx_i_j;
        fy_i += fy_i_j;
      }

      const ax_i = fx_i / Math.abs(m[i]);
      const ay_i = fy_i / Math.abs(m[i]);
      const vx_i = vx[i] + ax_i * dt;
      const vy_i = vy[i] + ay_i * dt;
      const x_i = x[i] + vx_i * dt;
      const y_i = y[i] + vy_i * dt;

      data.bodies[i].physical = {
        m: data.bodies[i].physical.m,
        x: x_i,
        y: y_i,
        vx: vx_i,
        vy: vy_i
      };
    }

    common.time += 1000 * dt;
  }

  return data;
}

//Отображаемый формат данных в форме
export function numberFormatter(name, num, isFocus) {
  if (isFocus) {
    return;
  }

  const module = Math.abs(num);

  if (module === 0) {
    if (name === "T") {
      return num;
    }
    return (Math.round(num * 1000) / 1000).toFixed(3);
  }

  if (module >= 1e6 || module < 1e-3) {
    return num.toExponential(3);
  }

  if (module >= 1e3) {
    return Math.round(num);
  }

  if (name === "T") {
    return num;
  }

  return (Math.round(num * 1000) / 1000).toFixed(3);
}

//Добавить новое тело с параметрами по умолчанию
export function getParamsForNewBody(number) {
  return {
    name: `Тело №${number}`,
    number,
    physical: {
      m: 100,
      x: (number - 1) * 50,
      y: 0,
      vx: 0,
      vy: 100 / number
    },
    radius: 0,
    color: BODY_DEFAULT_COLOR
  };
}

//Единицы измерения констант и физических параметров тел ''
export function getUnitOfMeasurement(name) {
  switch (name) {
    case "G":
      return ", H·м²·кг⁻²";
    case "m":
      return ", кг";
    case "x":
    case "y":
      return ", м";
    case "vx":
    case "vy":
      return ", м/с";
    default:
      return "";
  }
}

//Изменение масштаба
export function getNewScaleAndPosition(common, event) {
  let { scale, posX, posY } = common;
  const { clientX, clientY, deltaY } = event;
  const { clientWidth, clientHeight } = document.getElementById("field");

  const cx = clientX - 315 - clientWidth / 2;
  const cy = -clientY + clientHeight / 2;

  const zoomInScaleFactor = 1.25;
  const zoomInOffsetFactor = 0.25;
  const zoomOutScaleFactor = 0.8;
  const zoomOutOffsetFactor = 0.2;

  if (deltaY > 0) {
    scale *= zoomOutScaleFactor;
    posX = zoomOutScaleFactor * posX + zoomOutOffsetFactor * cx;
    posY = zoomOutScaleFactor * posY - zoomOutOffsetFactor * cy;
  }

  if (deltaY < 0) {
    scale *= zoomInScaleFactor;
    posX = zoomInScaleFactor * posX - zoomInOffsetFactor * cx;
    posY = zoomInScaleFactor * posY + zoomInOffsetFactor * cy;
  }

  return { scale, posX, posY };
}

//Изменение позиции
export function getNewPosition(common, event) {
  let { posX, posY } = common;
  const { movementX, movementY } = event;

  return { posX: posX + movementX, posY: posY + movementY };
}

//Таймер
export function getTimeByMilliseconds(milliseconds) {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const YEAR = 365 * DAY;

  const MillisecondsPer = {
    SECOND,
    MINUTE,
    HOUR,
    DAY,
    YEAR
  };

  const years = Math.floor(milliseconds / MillisecondsPer.YEAR);
  const msForYears = MillisecondsPer.YEAR * years;

  const days = Math.floor((milliseconds - msForYears) / MillisecondsPer.DAY);
  const msForDays = msForYears + MillisecondsPer.DAY * days;

  const hours = Math.floor((milliseconds - msForDays) / MillisecondsPer.HOUR);
  const msForHours = msForDays + MillisecondsPer.HOUR * hours;

  const minutes = Math.floor(
    (milliseconds - msForHours) / MillisecondsPer.MINUTE
  );
  const msForMinutes = msForHours + MillisecondsPer.MINUTE * minutes;

  const seconds = Math.floor(
    (milliseconds - msForMinutes) / MillisecondsPer.SECOND
  );
  const msForSeconds = msForMinutes + MillisecondsPer.SECOND * seconds;

  const ms = Math.floor(milliseconds - msForSeconds);

  return { years, days, hours, minutes, seconds, ms };
}

export function timeFormatter(value, type) {
  switch (type) {
    case "ms":
      if (value < 10) {
        value = "0" + String(value);
      }

      if (value < 100) {
        value = "0" + String(value);
      }

      return value;

    default:
      if (value < 10) {
        value = "0" + String(value);
      }

      return value;
  }
}

//Индикатор масштаба
export function getParamsForRuler(scale, widthRulerBlock = 100) {
  const logLength = Math.log10(widthRulerBlock / scale);
  const logLengthFloor = Math.floor(logLength);

  const rulerWidth = `${Math.pow(10, logLengthFloor + 2) /
    Math.pow(10, logLength)}px`;

  let scaleValue;

  if (logLengthFloor < -3) {
    scaleValue = {
      value: 10,
      power: logLengthFloor,
      unit: `м`
    };
  } else if (logLengthFloor < 0) {
    scaleValue = {
      value: Math.pow(10, logLengthFloor + 3),
      unit: `мм`
    };
  } else if (logLengthFloor < 3) {
    scaleValue = {
      value: Math.pow(10, logLengthFloor),
      unit: `м`
    };
  } else if (logLengthFloor < 6) {
    scaleValue = {
      value: Math.pow(10, logLengthFloor - 3),
      unit: `км`
    };
  } else if (logLengthFloor >= 6) {
    scaleValue = {
      value: 10,
      power: logLengthFloor - 3,
      unit: `км`
    };
  }

  return { scaleValue, rulerWidth };
}

export function getBodyPosition(body, common) {
  const { x, y } = body.physical;
  const { scale, posX, posY } = common;
  const translateX = x * scale + posX;
  const translateY = -y * scale + posY;

  return { translateX, translateY };
}

export function getBodyRadius(radius, scale) {
  if (radius * scale * 2 > 5) {
    return radius * scale * 2;
  }
  return 5;
}

export function objectClone(data) {
  return JSON.parse(JSON.stringify(data));
}
