import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
import { concatClasses } from '../../helpers'

function Wrapper(props) {
  // console.log('render layout', props)
  const { children, css, boxed, fullHeight, tag, ...rest } = props

  let cssClass = concatClasses([
    styles['page-wrapper'],
    boxed ? styles['page-wrapper-boxed'] : styles['page-wrapper-fluid'],
    css,
  ])

  const Component = tag

  return (
    <Component
      style={fullHeight && { minHeight: '100vh' }}
      className={cssClass}
      {...rest}
    >
      {children}
    </Component>
  )
}

Wrapper.propTypes = {
  css: PropTypes.string,
  fullHeight: PropTypes.bool,
  boxed: PropTypes.bool,
  tag: PropTypes.string,
}

Wrapper.defaultProps = {
  fullHeight: false,
  boxed: false,
  tag: 'div',
}

export default Wrapper
