const [data, setData] = useState({
    searchTerm: "",
    selectedEmployee: null,
    employeeData: []
});
const { searchTerm, selectedEmployee, employeeData  } = data;

useEffect(() => {
    API.search().then(res => setData({...data, employeeData: res.data.data}))
}, [])

const salarySort = e => {
    e.preventDefault();
    employeeData.sort((a, b) => {return a-b});
}

const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value
    });
   
    employeeData.filter(employee => employee.id === searchTerm)
}