document.write(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=<device-width>, initial-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />    
        <title>Convenience Stores and Marts</title>
    </head>
    <div class="table-body">
        <!-- Reference to external css file -->
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <p>
            There are a number of convenience stores and marts scattered across
            Gwanak campus, perfect for a quick snack or convenient pick-me-up.
            Take a look at the table below for more detailed information.
        </p>
        <table>
            <thead>
                <tr>
                    <th rowspan="2">Area</th>
                    <th rowspan="2">Store</th>
                    <th rowspan="2">Bldg.</th>
                    <th rowspan="2">Floor</th>
                    <th rowspan="2">Type</th>
                    <th colspan="2">Operating Hours (during semester)</th>
                </tr>
                <tr>
                    <th>Mon-Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>POSCO Sports Center</td>
                    <td>ProShop</td>
                    <td>71-2</td>
                    <td>1</td>
                    <td>Sports clothing and equipment</td>
                    <td>07:30-21:00</td>
                    <td></td>
                </tr>
                <tr>
                    <td>College of Veterinary Medicine</td>
                    <td>Veterinary College Rest Snack Bar</td>
                    <td>85</td>
                    <td>3</td>
                    <td>Mart</td>
                    <td>09:00-18:00</td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">College of Social Sciences</td>
                    <td>CU</td>
                    <td>16-1</td>
                    <td>1</td>
                    <td>Convenience Store<br />(24 hours)</td>
                    <td>08:00-24:00</td>
                    <td>00:00-24:00</td>
                </tr>
                <tr>
                    <td>SNUplex</td>
                    <td>101</td>
                    <td>1</td>
                    <td>Convenience store and gift shop</td>
                    <td>09:00-18:30</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Kwanjeong Library</td>
                    <td>CU</td>
                    <td>62-1</td>
                    <td>1</td>
                    <td>Convenience store</td>
                    <td>08:00-22:00</td>
                    <td>08:00-20:00</td>
                </tr>
                <tr>
                    <td>Central Library</td>
                    <td>SNUCO</td>
                    <td>62</td>
                    <td>3</td>
                    <td>Convenience store</td>
                    <td>08:00-22:00</td>
                    <td>08:00-20:00</td>
                </tr>
                <tr>
                    <td>Campus Center</td>
                    <td>SNUCO</td>
                    <td>63</td>
                    <td>1</td>
                    <td>Convenience store</td>
                    <td>08:00-20:00</td>
                    <td>08:00-19:00</td>
                </tr>
                <tr>
                    <td>College of Natural Sciences</td>
                    <td>SNUCO</td>
                    <td>500</td>
                    <td>1</td>
                    <td>Convenience store</td>
                    <td>08:30-19:30</td>
                    <td></td>
                </tr>
                <tr>
                    <td>College of Agriculture and Life Sciences</td>
                    <td>SNUCO</td>
                    <td>75-1</td>
                    <td>4</td>
                    <td>Convenience store</td>
                    <td>08:00-19:30</td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="3">College of Engineering<br />(Lower)</td>
                    <td>CU</td>
                    <td>34</td>
                    <td>1</td>
                    <td>Self-checkout<br />convenience store (24 hours)</td>
                    <td>00:00-24:00</td>
                    <td>00:00-24:00</td>
                </tr>
                <tr>
                    <td>CU</td>
                    <td>32-1</td>
                    <td>B1</td>
                    <td>Convenience store</td>
                    <td>07:30-21:00</td>
                    <td>12:00-17:00</td>
                </tr>
                <tr>
                    <td>SNUCO</td>
                    <td>113</td>
                    <td>1</td>
                    <td>Convenience store and gift shop</td>
                    <td>08:00-19:30</td>
                    <td>09:00-17:00</td>
                </tr>
                <tr>
                    <td>College of Engineering<br />(upper)</td>
                    <td>CU</td>
                    <td>301</td>
                    <td>B1</td>
                    <td>Convenience store</td>
                    <td>08:00-22:00</td>
                    <td>09:00-18:00</td>
                </tr>
                <tr>
                    <td>College of Education</td>
                    <td>Hanaro Mart</td>
                    <td>76</td>
                    <td>2</td>
                    <td>Mart</td>
                    <td>09:00-18:00</td>
                    <td></td>
                </tr>
                <tr>
                    <td>College of Liberal Studies</td>
                    <td>SNUCO</td>
                    <td>220</td>
                    <td>B1</td>
                    <td>Convenience Store</td>
                    <td>09:00-19:00</td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">Gwanaksa Dormitory</td>
                    <td>GS25</td>
                    <td>900</td>
                    <td>B2</td>
                    <td>Convenience store<br />(24 hours)</td>
                    <td>00:00-24:00</td>
                    <td>00:00-24:00</td>
                </tr>
                <tr>
                    <td>SNUCO</td>
                    <td>919</td>
                    <td>1</td>
                    <td>Convenience store</td>
                    <td>08:00-01:30</td>
                    <td>08:00-01:30</td>
                </tr>
                <tr>
                    <td>Research Park</td>
                    <td>7-Eleven</td>
                    <td>940</td>
                    <td>B1</td>
                    <td>Convenience store<br />(24 hours)</td>
                    <td>00:00-24:00</td>
                    <td>00:00-24:00</td>
                </tr>
                <tr>
                    <td>Family Dormitory</td>
                    <td>SNUCO</td>
                    <td>933</td>
                    <td>B1</td>
                    <td>Convenience store</td>
                    <td>09:00-22:00</td>
                    <td>09:00-21:00</td>
                </tr>
            </tbody>
        </table>
        <div class="reference">Last updated by: Team SISA (August 2019)</div>
    </div>
</html>
`);
