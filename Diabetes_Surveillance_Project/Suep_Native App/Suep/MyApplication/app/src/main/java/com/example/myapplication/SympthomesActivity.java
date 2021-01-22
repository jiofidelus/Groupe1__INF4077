package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class SympthomesActivity extends AppCompatActivity implements View.OnClickListener{
    private CardView mcardLecture, mcardAudio;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sympthomes);

        mcardLecture = (CardView) findViewById(R.id.activity_sympthomes_lecture);
        mcardAudio = (CardView) findViewById(R.id.activity_sympthomes_audio);

        mcardLecture.setOnClickListener(this);
        mcardAudio.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.activity_sympthomes_audio:
                Intent intent = new Intent(getApplicationContext(), AudioActivity.class);
                startActivity(intent);
                break;
            case R.id.activity_sympthomes_lecture:
                intent = new Intent(getApplicationContext(), LectureActivity.class);
                startActivity(intent);
                break;
        }
    }
}