import javax.swing.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class User_sigin extends JDialog {
    private JTextField tfUsername;
    private JPasswordField pfPassword;
    private JPasswordField pfConfirmPassword;
    private JButton btnSignup;
    private JButton btnCancel;

    public User_sigin(JFrame parent){
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        btnSignup.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                SignupUser();
            }
        });
        btnCancel.addActionListener(new ActionListener()){
            @Override
            public void actionPerformed(ActionEvent e){
                dispose();
            }
        });
        setVisible(true);


    }

    private void SignupUser() {
        String Username = tfUsername.getText();
        String Password = String.valueof(pfPassword.getPassword());
        String ConfirmPassword = String.valueof(pfConfirmPassword.getPassword());
        if (Username.isEmpty()|| Password.isEmpty()){
            JOptionPane.showMessageDialog(this,
                    "please enter all fields",
                    "Try again",
                    JOptionPane.ERROR_MESSAGE);
            return;
        }
        if (!Password.equals(ConfirmPassword)){
            JOptionPane.showMessageDialog(this,
                    "Confirm Password does not match",
                    "Try again",
                    JOptionPane.ERROR_MESSAGE);
            return;
        }
        user =addUserToDatabase(Username,Password);
        if (user != null){
            dispose();
        }
        else {
            JOptionPane.showMessageDialog(this,
                    "Failed to register new user ",
                    "Try again",
                    JOptionPane.ERROR_MESSAGE);
            return;
        }



    }
    public static String user;
    private static User addUserToDatabase(String Username, String Password) {
        User user =null;
        final String DB_URL="jdbc:mysql://localhost/econation?serverTimezone=UTC";
        final String USERNAME ="root";
        final String PASSWORD = "password";

        try{
            Connection conn = DriverManager.getConnection(DB_URL,USERNAME,PASSWORD);
            //connecting to database successfully

            Statement stmt =conn.createStatement();
            String sql="INSERT INTO user (User_Name,User_Password)"+"VALUES (?,?,?,?,?)";
            PreparedStatement preparedStatement=conn.prepareStatement(sql);
            preparedStatement.setString(1,Username);
            preparedStatement.setString(2,Password);

            //Insert row into the table
            int addedRows =preparedStatement.executeUpdate();
            if (addedRows >0){
                user = new User();
                user.Username =Username;
                user.Password=Password;
            }
            stmt.close();
            conn.close();


        }catch(Exception e){
            e.printStackTrace();
        }
        return user;
    }

    public static void main(String[] args){
        User_sigin userLogin1 = new User_sigin(null);
        User user =myForm.user;
        if (user != null){
            System.out.println("Successfull registration of: " + user.Username);
        }
        else{
            System.out.println("Registration canceled");
        }

    }
}
