import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
import { concatClasses } from '../../helpers'

function Container(props) {
  const { children, tag, css, size, centered, ...rest } = props
  let cssClass = concatClasses([
    styles.container,
    css,
    typeof size === 'string' && styles[`container-${size}`],
    centered && styles.containerCentered,
  ])

  const Component = tag
  return (
    <Component
      {...rest}
      className={cssClass}
      style={{ maxWidth: typeof size === 'number' && size }}
    >
      {children}
    </Component>
  )
}

Container.propTypes = {
  css: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  centered: PropTypes.bool,
}

Container.defaultProps = {
  tag: 'div',
  centered: false,
}

export default Container
