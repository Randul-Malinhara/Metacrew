import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.*;

public class User_Login extends JDialog {
    private JTextField tfUsername;
    private JPasswordField pfPassword;
    private JButton btnLogin;
    private JPanel loginPanel;

    public User_Login(JFrame parent){
        super(parent);
        setTitle("Login");
        setContentPane(loginPanel);
        setMinimumSize(new Dimension(450,474));
        setModal(true);
        setLocationRelativeTo(parent);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setVisible(true);

        btnLogin.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
               String Username = tfUsername.getText();
               String Password = String.valueOf(pfPassword.getPassword());

               user =getAuthenticatedUser(Username,Password);

               if (user !=null){
                   dispose();
               }
               else{
                   JOptionPane.showMessageDialog(User_Login.this,
                           "Username or Password Invalid",
                           "Try again",
                           JOptionPane.ERROR_MESSAGE);
               }
            }
        });
    }
    public User user;
    private User getAuthenticatedUser(String Username,String password){
        User user=null;
        final String DB_URL="jdbc:mysql://localhost/econation?serverTimezone=UTC";
        final String USERNAME ="root";
        final String PASSWORD = "password";

        try{
                Connection conn =DriverManager.getConnection(DB_URL,USERNAME,PASSWORD);
                //Connected to database successfully//
                Statement stmt = conn.createStatement();
                String sql ="SELECT * FROM users WHERE Username=? AND Password=?";
                PreparedStatement preparedStatement = conn.prepareStatement(sql);
                preparedStatement.setString(1,USERNAME);
                preparedStatement.setString(2,PASSWORD);

                ResultSet resultSet=preparedStatement.executeQuery();
                if (resultSet.next()){
                    user = new User();
                    user.Username=resultSet.getString("Username");
                    user.Password=resultSet.getString("Password");
                }
                stmt.close();
                conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return user;
    }
    public static void main (String[] args){
        User_Login userlogin = new User_Login(null);
    }
}
