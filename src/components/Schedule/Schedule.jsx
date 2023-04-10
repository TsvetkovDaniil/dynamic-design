import React from 'react'
import classes from './Schedule.module.css'

const Schedule = (props) => {
  return (
    <table className={classes.schedule}>
      <tr className={classes.tableRow}>
        <th className={classes.tableHeader}>№</th>
        <th className={classes.tableHeader}>Понедельник</th>
        <th className={classes.tableHeader}>Вторник</th>
        <th className={classes.tableHeader}>Среда</th>
        <th className={classes.tableHeader}>Четверг</th>
        <th className={classes.tableHeader}>Пятница</th>
        <th className={classes.tableHeader}>Суббота</th>
        <th className={classes.tableHeader}>Воскресенье</th>
      </tr>
      <tr>
        <td className={classes.tableData}>1</td>
        <td className={classes.tableData}>Практика 1</td>
        <td className={classes.tableData}>Леция 1</td>
        <td className={classes.tableData}>Практика 2</td>
        <td className={classes.tableData}>Леция 2</td>
        <td className={classes.tableData}>Практика 3</td>
        <td className={classes.tableData}>Леция 2</td>
        <td className={classes.tableData}>Практика 3</td>
      </tr>
      <tr>
        <td className={classes.tableData}>2</td>
        <td className={classes.tableData}>Практика 1</td>
        <td className={classes.tableData}>Леция 1</td>
        <td className={classes.tableData}>Практика 2</td>
        <td className={classes.tableData}>Леция 2</td>
        <td className={classes.tableData}>Практика 3</td>
        <td className={classes.tableData}>Леция 2</td>
        <td className={classes.tableData}>Практика 3</td>
      </tr>
      <tr>
        <td className={classes.tableData}>3</td>
        <td className={classes.tableData}>Практика 1</td>
        <td className={classes.tableData}>Леция 1</td>
        <td className={classes.tableData}>Практика 2</td>
        <td className={classes.tableData}>Леция 2</td>
        <td className={classes.tableData}>Практика 3</td>
        <td className={classes.tableData}>Леция 2</td>
        <td className={classes.tableData}>Практика 3</td>
      </tr>
    </table>
  )
}

export default Schedule
