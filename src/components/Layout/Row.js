import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
import { concatClasses } from '../../helpers'

function Row(props) {
  const { children, css, tag, xs, sm, md, lg, xl, ...rest } = props

  let cssClass = concatClasses([
    styles.row,
    styles[`row-cols-${xs}`],
    styles[`row-cols-sm-${sm}`],
    styles[`row-cols-md-${md}`],
    styles[`row-cols-lg-${lg}`],
    styles[`row-cols-xl-${xl}`],
    css,
  ])

  const Component = tag

  return (
    <Component {...rest} className={cssClass}>
      {children}
    </Component>
  )
}

Row.propTypes = {
  css: PropTypes.string,
  tag: PropTypes.string,
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'auto']),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'auto']),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'auto']),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'auto']),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'auto']),
}

Row.defaultProps = {
  tag: 'div',
  xs: 'auto',
}

export default Row
