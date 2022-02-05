# Write your MySQL query statement below
#from Employees return 

SELECT emp_id, event_day AS Day, SUM(out_time - in_time) AS total_time
FROM Employees
GROUP BY 1, 2