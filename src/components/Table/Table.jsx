import React from 'react'

export const Table = ({ list, colNames, width = 'auto', height = 'auto'}) => {
  return (
    <div style={{boxShadow: '3px 6px 3px #ccc'}}>
        {
            list.length > 0 && (
                <table cellSpacing="0" style={{width: width, height: height, padding: "5px 10px"}}>
                    <thead style={{ backgroundColor: "black", color: "white"}}>
                        <tr>
                            {
                                colNames.map((header, index) => 
                                    <th key={index}>
                                        {header}
                                    </th> 
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            list.map((listItem, index) =>
                                <tr key={index}>
                                    {
                                        Object.values(listItem).map(( value, indexValue) => 
                                            <td key={indexValue}>{value}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            )
        }
    </div>
  )
}
