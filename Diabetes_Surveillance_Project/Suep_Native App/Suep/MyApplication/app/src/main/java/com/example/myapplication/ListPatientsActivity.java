package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ListPatientsActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    FloatingActionButton add_button;
    CustomAdapter2 customAdapter2;

    DatabaseHelper myDB;
    ArrayList<String> patient_name, patient_prename, patient_ville, patient_phone;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_patients);

        recyclerView = findViewById(R.id.recyclerView);
        add_button = findViewById(R.id.add_button);
        add_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), AddPatientActivity.class);
                startActivity(intent);
            }
        });

        myDB = new DatabaseHelper(ListPatientsActivity.this);
        patient_name = new ArrayList<>();
        patient_prename = new ArrayList<>();
        patient_ville = new ArrayList<>();
        patient_phone = new ArrayList<>();

        storeDataInArray();
        customAdapter2 = new CustomAdapter2(ListPatientsActivity.this,patient_name, patient_prename, patient_phone, patient_ville);
        recyclerView.setAdapter(customAdapter2);
        recyclerView.setLayoutManager(new LinearLayoutManager(ListPatientsActivity.this));
    }

    void storeDataInArray(){
        Cursor cursor = myDB.getListContents();
        if(cursor.getCount() == 0){
            Toast.makeText(this, "No sympthomes",Toast.LENGTH_SHORT).show();
        }else{
            while(cursor.moveToNext()){
                patient_name.add(cursor.getString(1));
                patient_prename.add(cursor.getString(2));
                patient_phone.add(cursor.getString(3));
                patient_ville.add(cursor.getString(6));
            }
        }
    }
}