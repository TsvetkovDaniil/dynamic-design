import React from 'react'
import classes from './Schedule.module.css'
import { useTranslation } from 'react-i18next'

const Schedule = (props) => {
  const { t, i18n } = useTranslation()

  return (
    <table className={classes.schedule}>
      <tr className={classes.tableRow}>
        <th className={classes.tableHeader}>№</th>
        <th className={classes.tableHeader}>{t("monday")}</th>
        <th className={classes.tableHeader}>{t("tuesday")}</th>
        <th className={classes.tableHeader}>{t("wednesday")}</th>
        <th className={classes.tableHeader}>{t("thursday")}</th>
        <th className={classes.tableHeader}>{t("friday")}</th>
        <th className={classes.tableHeader}>{t("saturday")}</th>
        <th className={classes.tableHeader}>{t("sunday")}</th>
      </tr>
      <tr>
        <td className={classes.tableData}>1</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
      </tr>
      <tr>
        <td className={classes.tableData}>2</td>
        <td className={classes.tableData}>{t("practice")}</td>
        <td className={classes.tableData}>{t("practice")}</td>
        <td className={classes.tableData}>{t("practice")}</td>
        <td className={classes.tableData}>{t("practice")}</td>
        <td className={classes.tableData}>{t("practice")}</td>
        <td className={classes.tableData}>{t("practice")}</td>
        <td className={classes.tableData}>{t("practice")}</td>
      </tr>
      <tr>
        <td className={classes.tableData}>3</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
        <td className={classes.tableData}>{t("lecture")}</td>
      </tr>
    </table>
  )
}

export default Schedule
