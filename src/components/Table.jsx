import React from 'react'
import './Table.css';

export default function Table() {
    return (
        <div>
        <table border="1px" cellPadding="10px" cellSpacing="10px">
                <tr>
                    <th>S.NO</th>
                    <th>title</th>
                    <th>Date</th>
                    <th>Files</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            
            <tbody>
                <tr>
                    <td>01</td> 
                    <td>Eb bill (mar)</td>
                    <td>08-mar-2023</td>
                    <td> <input type="file" /></td>
                    <td>2500</td>
                    <button>edit</button>
                    <button>delete</button>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Milk bill(mar)</td>
                    <td>08-mar-2023</td>
                    <td> <input type="file" /></td>
                    <td>3500</td>
                    <button>edit</button>
                    <button>delete</button>
                </tr>
                <tr>
                    <td>03</td>
                    <td>bill(mar)</td>
                    <td>08-mar-2023</td>
                    <td> <input type="file" /></td>
                    <td>500</td>
                    <button>edit</button>
                    <button>delete</button>
                </tr>
                <tr>
                   
                </tr>
            </tbody>
        </table>
       
      
        </div>
    )
}
