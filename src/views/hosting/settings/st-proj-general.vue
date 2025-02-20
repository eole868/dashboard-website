<template>
  <div>
    <div class="bd-1">
      <h3>Project Name</h3>
      <div class="gray fz-14">
        Used to identify your Project in the Dashboard, 4everland CLI, and in
        the URL of your Deployments.
      </div>
      <div class="mt-5 d-flex hide-msg">
        <v-text-field outlined dense v-model="name"> </v-text-field>
        <v-btn
          min-width="100"
          color="primary"
          :loading="savingName"
          @click="onSaveName"
          :disabled="info.name == name || !name"
          class="ml-4"
          style="margin-top: 2px"
        >
          Save
        </v-btn>
      </div>
    </div>

    <div class="bd-1 mt-5">
      <h3>Build Configuration</h3>
      <div class="gray fz-14">
        When using a framework of a new project, it will be automatically
        detected. As a result, several project settings are automatically
        configured to achieve the best result. You can override them below.
      </div>
      <div class="mt-5">
        <v-select
          v-model="form.framework"
          @input="onFramework"
          :items="frameworks"
          item-text="name"
          item-value="slug"
          label="Framework Preset"
        >
        </v-select>

        <div class="d-flex al-c">
          <build-cmd
            class="mt-2 flex-1"
            v-model="form.buildCommand"
            :placeholder="buildCommandHint"
            :options="[]"
            :scripts="scripts"
            label="Build Command"
          />
          <build-cmd-tip />
        </div>

        <div class="d-flex al-c">
          <v-text-field
            persistent-placeholder
            v-model="form.outputDirectory"
            label="Output Directory"
            :placeholder="outputDirHint"
          ></v-text-field>
          <build-output-tip />
        </div>

        <div class="d-flex al-c">
          <v-text-field
            persistent-placeholder
            v-model="form.installCommand"
            label="Install Command"
            placeholder="‘yarn install’ or ‘npm install’"
          ></v-text-field>
          <e-tooltip top max-width="300">
            <template #ref>
              <v-icon class="ml-2" size="16" :color="$color1">
                mdi-help-circle-outline
              </v-icon>
            </template>
            <p>
              The command that is used to install your Project's software
              dependencies.
            </p>
            <p>
              If you don't need to install dependencies, override this field and
              leave it empty.
            </p>
          </e-tooltip>
        </div>

        <div class="ta-r mt-3">
          <v-btn
            min-width="100"
            color="primary"
            :disabled="!isCmdChange"
            :loading="savingCmd"
            @click="onSaveCmd"
            >Save</v-btn
          >
        </div>
      </div>
    </div>

    <div class="bd-1 mt-5 hide-msg">
      <h3>Root Directory</h3>
      <div class="gray fz-14">
        The directory within your project, in which your code is located. Leave
        this field empty if your code is not located in a subdirectory. A new
        Deployment is required for your changes to take effect.
      </div>
      <div class="mt-5 d-flex">
        <v-text-field outlined dense v-model="rootDirectory"> </v-text-field>
        <v-btn
          min-width="100"
          color="primary"
          :disabled="rootDirectory == info.config.rootDirectory"
          :loading="savingRoot"
          @click="onSaveRoot"
          class="ml-4"
          style="margin-top: 2px"
          >Save</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import BuildCmd from "@/views/hosting/common/build-cmd";
import BuildCmdTip from "@/views/hosting/build/build-cmd-tip";
import BuildOutputTip from "@/views/hosting/build/build-output-tip";
import { mapState } from "vuex";
import frameworks from "../../../plugins/config/frameworks.js";

export default {
  computed: {
    ...mapState({
      info: (s) => s.projectInfo,
      userInfo: (s) => s.userInfo,
    }),
    asMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isCmdChange() {
      let changed = false;
      for (const key in this.form) {
        let val = this.info.config[key] || "";
        if (this.form[key] != val) changed = true;
      }
      return changed;
    },
  },
  data() {
    return {
      name: "",
      rootDirectory: "",
      form: {},
      overForm: {},
      frameworks,
      scripts: null,
      buildCommandHint: "",
      outputDirHint: "",
      isOverBuild: false,
      isOverOutput: false,
      isOverInstall: false,
      savingName: false,
      savingCmd: false,
      savingRoot: false,
    };
  },
  watch: {
    info() {
      this.setForm();
    },
  },
  mounted() {
    this.setForm();
    this.onFramework(this.form.framework, true);
    this.getScripts();
  },
  methods: {
    setForm() {
      const { name, config } = this.info;
      console.log(config);
      this.name = name;
      const form = {
        framework: "",
        outputDirectory: "",
        buildCommand: "",
        installCommand: "",
      };
      const overForm = {};
      for (const key in form) {
        const val = (form[key] = config[key] || "");
        overForm[key] = !!val;
      }
      this.rootDirectory = config.rootDirectory;
      this.overForm = overForm;
      this.form = form;
    },
    async getScripts() {
      const { id } = this.info.repo;
      if (!id) return;
      try {
        const {
          data: { scripts },
        } = await this.$http2.get(
          "/project/detect-framework/" + this.info.repo.id,
          {
            noTip: 1,
          }
        );
        if (scripts) {
          this.scripts = JSON.parse(scripts);
        }
      } catch (error) {
        //
      }
    },
    onSwith(key) {
      const isOver = this.overForm[key];
      // console.log(key)
      this.form[key] = isOver ? this.info.config[key] || "" : "";
    },
    async saveProject(body) {
      await this.$http2.put("/project/config/" + this.info.id, body);
      this.$setState({
        noticeMsg: {
          name: "updateProject",
        },
      });
    },
    async onSaveRoot() {
      try {
        this.savingRoot = true;
        await this.saveProject({
          rootDirectory: this.rootDirectory,
        });
        this.$toast("Project updated successfully");
      } catch (error) {
        //
      }
      this.savingRoot = false;
    },
    async onSaveCmd() {
      try {
        this.savingCmd = true;
        await this.saveProject(this.form);
        this.$toast("Project updated successfully");
      } catch (error) {
        //
      }
      this.savingCmd = false;
    },
    async onSaveName() {
      try {
        await this.$confirm(`Your Project will be renamed to "${this.name}".`);
        this.savingName = true;
        await this.saveProject({
          name: this.name,
        });
        this.$toast("Renamed successfully");
      } catch (error) {
        //
      }
      this.savingName = false;
    },
    onFramework(val, isInit) {
      const item = this.$getFramework(val);
      const { buildCommand = {}, outputDirectory = {} } = item.settings || {};
      if (!this.form.buildCommand && !isInit) {
        this.form.buildCommand = buildCommand.value || "";
      }
      this.buildCommandHint = buildCommand.placeholder || "";
      this.outputDirHint =
        outputDirectory.placeholder || "`dist` if it exists, or `.`";
    },
  },
  components: {
    BuildCmd,
    BuildCmdTip,
    BuildOutputTip,
  },
};
</script>