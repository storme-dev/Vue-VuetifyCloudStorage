<template>
    <div class="about" style="height: 100%;">
        <input class="upload" type="file">
        <div class="treeview">
            <div class="treeview__item" @click="openFolder(-1)">
                <div class="treeview__title">Моё хранилище</div>
                <v-icon>mdi-chevron-right</v-icon>
            </div>
            <div class="treeview__item" @click="openFolder(item, index)" v-for="(item, index) in tree" :key="`tree-${index}`">
                <div class="treeview__title">{{ folders[item].name }}</div>
                <v-icon>mdi-chevron-right</v-icon>
            </div>
        </div>

        <div class="fs-items">
            <div class="fs-item" v-for="(folder, index) in folders" @dblclick="openFolder(index)" :key="`folder-${index}`" v-show="folder.parent == currentFolder">
                <!-- <v-icon size="70">mdi-file-document-outline</v-icon> -->
                <v-icon size="70">mdi-folder</v-icon>
                {{ folder.name }}
            </div>
            <div class="fs-item" v-for="(file, index) in files" :key="`file-${index}`" v-show="file.parent == currentFolder">
                <v-icon size="70">mdi-file-document-outline</v-icon>
                <!-- <v-icon size="70">mdi-folder</v-icon> -->
                {{ file.name }}
            </div>
        </div>
        <v-card
            style="position: absolute;"
            v-if="contextMenu.show == 1"
            :style="{
                top: contextMenu.y+'px',
                left: contextMenu.x+'px'    
            }"
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    color="primary"
                >
                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-folder</v-icon></v-list-item-icon>
                        <v-list-item-content><v-list-item-title>Создать папку</v-list-item-title></v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon><v-icon>mdi-file-document-outline</v-icon></v-list-item-icon>
                        <v-list-item-content><v-list-item-title>Создать файл</v-list-item-title></v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contextMenu: {
                x: 0,
                y: 0,
                show: 0
            },
            currentFolder: -1,
            tree: [],
            folders: [
                {
                    name: 'Новая папка',
                    parent: -1
                },
                {
                    name: 'Внутри папки',
                    parent: 0
                },
                {
                    name: 'Ещё внутри',
                    parent: 1
                }
            ],
            files: [
               {
                   name: 'Файл.txt',
                   parent: -1
               },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
               { name:'Test',parent:-1  },
            ]
        }
    },
    methods: {
        openFolder(index, treeidx = -1) {
            if(index != -1) 
            {
                /*
                let treeIndex = -1;
                for(let i = 0; i < this.tree.length; i++) {
                    if(this.tree[i] == index) {
                        treeIndex = i;
                        break;
                    }
                }*/
                if(treeidx != -1) this.tree.splice(treeidx, 1000);
                this.tree.push(index);
            }
            else 
            {
                this.tree = [];
            }
            this.currentFolder = index;
            return 1;
        }
    },
    mounted() {
        document.addEventListener('contextmenu', (e) => {
            var target = document.getElementsByClassName('v-main__wrap')[0];

            if(e.path.indexOf(target) != -1) {
                e.preventDefault();
                console.log(e);

                this.contextMenu.show = 1;
                this.contextMenu.x = e.offsetX;
                this.contextMenu.y = e.offsetY;
            }
        });

        document.addEventListener('click', () => {
            if(this.contextMenu.show == 1) {
                this.contextMenu.show = 0;
                this.contextMenu.x = 0;
                this.contextMenu.y = 0;                
            }
        });
    }
}
</script>

<style scoped>



.treeview {
    display: flex;
    align-items: center;
}

.treeview__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.treeview__title {
    padding: 3px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.treeview__title:hover {
    background: #EEEEEE;
}

.fs-items {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    height: 90%;
}

.fs-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.fs-item:hover {
    background: #EEEEEE;
}

</style>