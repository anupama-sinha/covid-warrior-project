package com.covid.fight.warriorproject.entity;

public enum State {
    Andhra_Pradesh(0),
    Arunachal_Pradesh(1),
    Assam(2),
    Bihar(3),
    Chhattisgarh(4),
    Goa(5),
    Gujarat(6),
    Haryana(7),
    Himachal_Pradesh(8),
    Jammu_Kashmir(9),
    Jharkhand(10),
    Karnataka(11),
    Kerala(12),
    Madhya_Pradesh(13),
    Maharashtra(14),
    Manipur(15),
    Meghalaya(16),
    Mizoram(17),
    Nagaland(18),
    Odisha(19),
    Punjab(20),
    Rajasthan(21),
    Sikkim(22),
    Tamil_Nadu(23),
    Telangana(24),
    Tripura(25),
    Uttar_Pradesh(26),
    Uttarakhand(27),
    West_Bengal(28),
    Andaman_Nicobar(29),
    Chandigarh(30),
    Dadra_Nagar_Haveli(31),
    Daman_Diu(32),
    Delhi(33),
    Lakshadweep(34),
    Ladakh(35),
    Puducherry(36);

    private int stateCode;

    State(int stateCode) {
        this.stateCode = stateCode;
    }
}
