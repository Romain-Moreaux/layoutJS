import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
import { concatClasses } from '../../helpers'

function Column(props) {
  // console.log(props)

  const { children, css, tag, direction, centered, ...rest } = props

  let cssClass = concatClasses([
    styles.column,
    styles[`column-${direction}`],
    centered && styles.columnCentered,
    css,
  ])

  const Component = tag

  return (
    <Component {...rest} className={cssClass}>
      {children}
    </Component>
  )
}

Column.propTypes = {
  css: PropTypes.string,
  tag: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
}

Column.defaultProps = {
  tag: 'div',
  direction: 'column',
}

export default Column
