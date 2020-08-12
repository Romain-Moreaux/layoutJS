import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'
import { concatClasses } from '../../helpers'

function Grid(props) {
  const { children, css, tag } = props
  let cssClass = concatClasses([styles.row, css])

  const Component = tag

  return <Component className={cssClass}>{children}</Component>
}

Grid.propTypes = {
  css: PropTypes.string,
  tag: PropTypes.string,
}

Grid.defaultProps = {
  tag: 'div',
}

export default Grid
