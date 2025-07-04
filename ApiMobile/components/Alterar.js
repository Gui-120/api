import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { updateCripto } from './Api';

export default function Alterar({ route, navigation }) {
    const { cripto } = route.params;
    const [nomeCripto, setNomeCripto] = useState(cripto.nomeCripto);
    const [siglaCripto, setSiglaCripto] = useState(cripto.siglaCripto);

const handleUpdate = () => {
    const updateData = {
        nomeCripto,
        siglaCripto
    };

    Alert.alert(
        'confirmação',
        'tem certeza de que deseja alterar esta cripto?',
        [
            { text: 'cancelar', style:'cancel'},
            {
                text: 'Alterar',
                onPress: () => updateCripto(cripto, updateData, navigation),
            },
        ]
    );
};

return (
    <View>
        <TextInput 
            placeholder="Nome da cripto"
            value={nomeCripto}
            onChangeText={setNomeCripto}
        />
        <TextInput 
            placeholder="sigla da cripto"
            value={siglaCripto}
            onChangeText={setSiglaCripto}
        />

        <Button title="Alterar" onPress={handleUpdate} />
    </View>
);
}