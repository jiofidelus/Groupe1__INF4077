package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private EditText mEmailInput;
    private  EditText mPasswordInput;
    private Button mSignInButton;
    private boolean connect;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mEmailInput = (EditText) findViewById(R.id.activity_main_email_input);
        mPasswordInput = (EditText) findViewById(R.id.activity_main_password_input);
        mSignInButton = (Button) findViewById(R.id.activity_main_signin_btn);

        mSignInButton.setEnabled(false);
        mEmailInput.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                connect = (s.toString().length() !=0);
                mPasswordInput.addTextChangedListener(new TextWatcher() {
                    @Override
                    public void beforeTextChanged(CharSequence s, int start, int count, int after) {

                    }

                    @Override
                    public void onTextChanged(CharSequence s, int start, int before, int count) {
                        mSignInButton.setEnabled(connect && (s.toString().length() !=0));
                    }

                    @Override
                    public void afterTextChanged(Editable s) {

                    }
                });
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });

        mSignInButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent dashboardActivity = new Intent(MainActivity.this, DashboardActivity.class);

                if(mEmailInput.getText().toString().equals("admin") && mPasswordInput.getText().toString().equals("suep")){
                    startActivity(dashboardActivity);
                }
                else{

                }
            }
        });
    }
}