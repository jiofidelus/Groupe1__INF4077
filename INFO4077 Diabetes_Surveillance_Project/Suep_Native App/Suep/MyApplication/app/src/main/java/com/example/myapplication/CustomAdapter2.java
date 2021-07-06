package com.example.myapplication;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class CustomAdapter2 extends RecyclerView.Adapter<CustomAdapter2.NewViewHolder> {

    private Context context;
    private ArrayList patient_name, patient_prename, patient_telephone, patient_ville;

    CustomAdapter2(Context context, ArrayList patient_name, ArrayList patient_prename, ArrayList patient_telephone,
                   ArrayList patient_ville){
        this.context = context;
        this.patient_name = patient_name;
        this.patient_prename = patient_prename;
        this.patient_telephone = patient_telephone;
        this.patient_ville = patient_ville;
    }

    @NonNull
    @Override
    public NewViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.list_row, parent, false);
        return new NewViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull NewViewHolder holder, int position) {
        holder.patient_name_txt.setText(String.valueOf(patient_name.get(position)));
        holder.patient_prename_txt.setText(String.valueOf(patient_prename.get(position)));
        holder.patient_telephone_txt.setText(String.valueOf(patient_telephone.get(position)));
        holder.patient_ville_txt.setText(String.valueOf(patient_ville.get(position)));
    }

    @Override
    public int getItemCount() {
        return patient_name.size();
    }

    public class NewViewHolder extends RecyclerView.ViewHolder {
        TextView patient_name_txt, patient_prename_txt, patient_telephone_txt, patient_ville_txt;

        public NewViewHolder(@NonNull View itemView) {
            super(itemView);
            patient_name_txt = itemView.findViewById(R.id.patient_name);
            patient_prename_txt = itemView.findViewById(R.id.patient_prename);
            patient_telephone_txt = itemView.findViewById(R.id.patient_telephone);
            patient_ville_txt = itemView.findViewById(R.id.patient_ville);
        }
    }
}
