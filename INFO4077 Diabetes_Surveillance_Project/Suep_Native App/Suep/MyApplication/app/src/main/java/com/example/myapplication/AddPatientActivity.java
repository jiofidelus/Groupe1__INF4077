package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Toast;

public class AddPatientActivity extends AppCompatActivity {

    DatabaseHelper myDB;
    private EditText name, prename, email, telephone, dateOfBirth, city, quater;
    private Button btnCapture, btnSave;
    private ImageView imgCapture, backArrow;
    Intent intent;
    private static final int Image_Capture_Code = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_patient);

        //referencement des objets du layout
        backArrow = (ImageView) findViewById(R.id.activity_addPatient_back_arrow);
        btnCapture = (Button) findViewById(R.id.btnTakePicture);
        imgCapture = (ImageView) findViewById(R.id.capturedImage);
        name = (EditText) findViewById(R.id.activity_addPatient_txtName);
        prename = (EditText) findViewById(R.id.activity_addPatient_txtPreName);
        email = (EditText) findViewById(R.id.activity_addPatient_txtEmail);
        telephone = (EditText) findViewById(R.id.activity_addPatient_telephone);
        dateOfBirth = (EditText) findViewById(R.id.activity_addPatient_dateOfBirth);
        city = (EditText) findViewById(R.id.activity_addPatient_txtCity);
        quater = (EditText) findViewById(R.id.activity_addPatient_quater);
        btnSave = (Button) findViewById(R.id.activity_addPatient_savebtn);
        myDB = new DatabaseHelper(this);

        backArrow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), DashboardActivity.class);
                startActivity(intent);
            }
        });

        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /*String patientName = name.getText().toString();
                String patientPrename = prename.getText().toString();
                String patientEmail = email.getText().toString();
                String patientTelephone = telephone.getText().toString();
                String patientDob = dateOfBirth.getText().toString();
                String patientCity = city.getText().toString();
                String patientQuater = quater.getText().toString();

                if(name.length() !=0 && prename.length() !=0 && telephone.length() !=0 && dateOfBirth.length() !=0){
                    DbHandler dbHandler = new DbHandler(AddPatientActivity.this);
                    dbHandler.InsertPatientsDetails(patientName, patientPrename, patientTelephone, patientEmail,
                            patientDob, patientCity, patientQuater);
                    intent = new Intent(AddPatientActivity.this,ListPatientsActivity.class);
                    startActivity(intent);
                    Toast.makeText(getApplicationContext(), "Patient Inserted Successfully",Toast.LENGTH_SHORT).show();
                }else{
                    Toast.makeText(getApplicationContext(), "Vous devez remplire tout les champs",Toast.LENGTH_SHORT).show();
                }*/
                String entry1 = name.getText().toString();
                String entry2 = prename.getText().toString();
                String entry3 = telephone.getText().toString();
                String entry4 = email.getText().toString();
                String entry5 = dateOfBirth.getText().toString();
                String entry6 = city.getText().toString();
                String entry7 = quater.getText().toString();
                if(name.length() !=0 && prename.length() !=0 && telephone.length() !=0 &&
                email.length() !=0 && dateOfBirth.length() !=0 && city.length() !=0 && quater.length() !=0){
                    AddData(entry1,entry2,entry3,entry4,entry5,entry6,entry7);
                    name.setText("");
                    prename.setText("");
                    telephone.setText("");
                    email.setText("");
                    dateOfBirth.setText("");
                    city.setText("");
                    quater.setText("");
                }else{
                    Toast.makeText(getApplicationContext(), "Vous devez remplire tout les champs",Toast.LENGTH_SHORT).show();
                }

            }
        });

        btnCapture.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cInt = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cInt,Image_Capture_Code);
            }
        });
    }

    public  void AddData(String entry1, String entry2, String entry3,String entry4,String entry5,String entry6,String entry7) {
        boolean insertData = myDB.addData(entry1, entry2, entry3, entry4, entry5, entry6, entry7);

        if(insertData == true) {
            Toast.makeText(getApplicationContext(), "Données enregistré",Toast.LENGTH_SHORT).show();
            intent = new Intent(AddPatientActivity.this, ListPatientsActivity.class);
            startActivity(intent);

        }else{
            Toast.makeText(getApplicationContext(), "Un probleme à été rencontrer",Toast.LENGTH_SHORT).show();
        }
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == Image_Capture_Code) {
            if (resultCode == RESULT_OK) {
                Bitmap bp = (Bitmap) data.getExtras().get("data");
                imgCapture.setImageBitmap(bp);
            } else if (resultCode == RESULT_CANCELED) {
                Toast.makeText(this, "Cancelled", Toast.LENGTH_LONG).show();
            }
        }
    }
}