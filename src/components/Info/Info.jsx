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
        <h3>Информация для студентов</h3>
        <div className={classes.input}>
          <p>{props.input}</p>
        </div>
        <div className={classes.childrenSection}>{children}</div>
      </div>
    </div>
  )
}

export default Info
