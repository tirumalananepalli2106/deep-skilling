SET SERVEROUTPUT ON;

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Age, Balance
        FROM Customers;

    CURSOR c_loans IS
        SELECT LoanID, CustomerID, InterestRate, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    -- Scenario 1 & Scenario 2
    FOR cust IN c_customers LOOP

        -- Apply 1% discount for customers above 60 years
        IF cust.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Interest rate reduced for Customer ID: ' || cust.CustomerID);
        END IF;

        -- Promote customer to VIP if balance > 10000
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust.CustomerID || ' promoted to VIP.');
        END IF;

    END LOOP;

    -- Scenario 3
    FOR loan_rec IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ID ' || loan_rec.CustomerID ||
            ', Loan ID ' || loan_rec.LoanID ||
            ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;

    COMMIT;

END;
/
