import classes from './Info.module.css'

const Info = ({ children, ...props }) => {
  const borderColor = '3px solid ' + props.color

  return (
    <div className={classes.info}>
      <h1>{props.name}</h1>
      <div
        className={classes.infoSection}
        style={{ borderTop: borderColor, borderBottom: borderColor }}
      >
        <div className={classes.childrenSection}>{children}</div>
      </div>
    </div>
  )
}

export default Info
