export const _getFieldError = (form, field) => {
  if (form.errors[field] && form.touched[field]) {
    return {
      type: 'error',
      rightComponent: form.errors[field],
    }
  }
}

export const _getFieldStatus = (form, field) => {
  if (form.touched[field]) {
    if (form.errors[field]) {
      return 'error'
    } else {
      return 'ok'
    }
  }
}

export const _minTwoDigits = (num) => {
  return ('0' + num).slice(-2)
}

export const _isNumeric = (val) => {
  return !isNaN(val)
}

export const _getNMinutesLater = (n) => {
  const time = new Date()
  time.setMinutes(time.getMinutes() + n)
  return time
}

export const _queryToUrlParams = (query) => {
  let params = ''

  Object.keys(query).forEach(
    (key, index) =>
      query[key] &&
      (index == 0
        ? (params += `?${key}=${query[key]}`)
        : (params += `&${key}=${query[key]}`)),
  )

  return params
}