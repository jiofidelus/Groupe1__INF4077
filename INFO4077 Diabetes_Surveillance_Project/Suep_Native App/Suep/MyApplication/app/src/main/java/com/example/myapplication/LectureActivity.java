package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.ArrayList;

public class LectureActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    FloatingActionButton add_button;

    DatabaseHelper myDB;
    ArrayList<String> sympthome_id, sympthome_title, sympthome_description;
    CustomAdapter customAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lecture);

        recyclerView = findViewById(R.id.recyclerView);
        add_button = findViewById(R.id.add_button);

        add_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(LectureActivity.this, AddActivity.class);
                startActivity(intent);
            }
        });

        myDB = new DatabaseHelper(LectureActivity.this);
        sympthome_id = new ArrayList<>();
        sympthome_title = new ArrayList<>();
        sympthome_description =  new ArrayList<>();

        storeDataInArrays();

        customAdapter = new CustomAdapter(LectureActivity.this, sympthome_id, sympthome_title, sympthome_description);
        recyclerView.setAdapter(customAdapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(LectureActivity.this));
    }

    void storeDataInArrays(){
        Cursor cursor = myDB.readAllSympthome();
        if(cursor.getCount() == 0){
            Toast.makeText(this, "No sympthomes",Toast.LENGTH_SHORT).show();
        }else{
            while(cursor.moveToNext()){
                sympthome_id.add(cursor.getString(0));
                sympthome_title.add(cursor.getString(1));
                sympthome_description.add(cursor.getString(2));
            }
        }
    }
}